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
