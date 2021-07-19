import { components } from '@acpl/mobile-tab';
import { extend } from 'flarum/common/extend';

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

import Modal from 'flarum/common/components/Modal';

export default class searchmodal extends Modal {
  static isDismissible = true;

  className() {
    return 'searchmodal';
  }
  title() {
    // Content to show in the modal's title bar
    return <p>What is your question?</p>;
  }

  content() {
    // Content to show in the modal's body
return [
items.add('search', Search.component({
            state: app.search,
        }), -100);
];
  }
}
