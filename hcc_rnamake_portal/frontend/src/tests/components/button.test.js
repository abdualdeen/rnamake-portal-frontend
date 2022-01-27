import React from "react";
import ReactDOM from 'react-dom';
import { Button } from "../../components/Button";

it('renders without issues', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <div>
            <Button 
            children=
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--xlarge">Design New RNA Scaffold</Button>
        </div>
    , div);
});