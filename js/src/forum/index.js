import app from 'flarum/forum/app';
import addmodal from './addmodal';
import addsearch from './addsearch';

app.initializers.add('talentbrick-forum-search-for-mobile-devices', () => {
    addmodal();
    addsearch();
});
