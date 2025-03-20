import { hash } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

function classes(...args) {
  const classes = args.filter(Boolean);
  return classes.join(' ');
}
const Item = setComponentTemplate(precompileTemplate("\n  {{#if @route}}\n    <LinkTo class=\"list-group-item list-group-item-action\" @route={{@route}} ...attributes>\n      {{yield}}\n    </LinkTo>\n  {{else if @url}}\n    <a class={{classes \"list-group-item list-group-item-action\" (if @active \"active\") (if @disabled \"disabled\")}} href={{@url}} ...attributes>\n      {{yield}}\n    </a>\n  {{else}}\n    <div class=\"list-group-item list-group-item-action\" ...attributes>\n      {{yield}}\n    </div>\n  {{/if}}\n  {{#if (has-block \"group\")}}\n    {{yield (hash Group=(component Group)) to=\"group\"}}\n  {{/if}}\n", {
  strictMode: true,
  scope: () => ({
    LinkTo,
    classes,
    hash,
    Group
  })
}), templateOnly());
const Group = setComponentTemplate(precompileTemplate("\n  <div class=\"item\">\n    {{#if (has-block \"header\")}}\n      {{#if @route}}\n        <LinkTo class=\"header list-group-item list-group-item-action\" @route={{@route}} ...attributes>\n          {{yield to=\"header\"}}\n        </LinkTo>\n      {{else}}\n        <div class=\"header\">\n          {{yield to=\"header\"}}\n        </div>\n      {{/if}}\n    {{/if}}\n    {{#if (has-block \"group\")}}\n      {{yield (component Item) to=\"group\"}}\n    {{/if}}\n  </div>\n", {
  strictMode: true,
  scope: () => ({
    LinkTo,
    Item
  })
}), templateOnly());
const Sidebar = setComponentTemplate(precompileTemplate("\n  <div class=\"sidebar card\" ...attributes>\n    <div class=\"list-group d-flex flex-column overflow-auto\">\n      {{yield (hash Group=(component Group) Item=(component Item))}}\n    </div>\n  </div>\n", {
  strictMode: true,
  scope: () => ({
    hash,
    Group,
    Item
  })
}), templateOnly());

export { Sidebar as default };
//# sourceMappingURL=sidebar.js.map
