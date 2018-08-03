import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/main.scss';


ReactDOM.render(
    <div>
        <a href="/en">en</a> | <a href="/pl">pl</a>

        <h3>{__('animals.walrus')}</h3>

        <h3>{__('animals').hedgehog}</h3>

        <h3>{__('animals.yeti')}</h3>

        <h3>{__('animals').bigfoot}</h3>

        <div>
            {JSON.stringify(__('animals'))}
        </div>
    </div>,
    document.getElementById('app')
);
