import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';
import 'ember-source/types';

import PageTitleRegistry from 'ember-page-title/template-registry';
import AddonRegistry from 'glint-bug-repro/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends PageTitleRegistry, AddonRegistry {}
}
