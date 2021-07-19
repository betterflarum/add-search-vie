import app from 'flarum/forum/app';
import addsearch from './addsearch';

app.initializers.add('talentbrick-forum-search-for-mobile-devices', () => {
    addsearch();
});
