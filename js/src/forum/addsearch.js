import { components } from '@acpl/mobile-tab';
import { extend } from 'flarum/common/extend';
import addmodal from './addmodal';

const { MobileTab, MobileTabItem } = components;

export default () => {
  extend(MobileTab.prototype, 'items', (items) => {
    // Add new item
    items.add(
        'logIn',
        <Button icon="fas fa-search" className="Button Button--link SearchMenu" onclick={() => app.modal.show(searchmodal, {})}>
          "Search"
        </Button>,
      89
    );
  });
};
