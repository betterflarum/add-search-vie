import app from 'flarum/forum/app';
import addModels from './addmodal';
import addMailingLinks from './addsearch';

app.initializers.add('talentbrick-forum-search-for-mobile-devices', () => {
    addmodal();
    addsearch();
});
