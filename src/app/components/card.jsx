import PropTypes from 'prop-types';
import React from 'react';
import $ from "jquery";

class Card extends Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);
        this.slideRight = this.slideRight.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
    }

    slideRight(e) {
        let card_Panel = $('.card-slider').width();
        let item_card = $('.card-div').width() + 10;
        let card_count = card_Panel/item_card;
        let scroll_card = Math.floor(card_count) * item_card;

        $('#' + this.props.applySlidingStyllingId).animate({

            //scrollLeft: "+=230px"
            scrollLeft: "+="+scroll_card+"px"
        }, "fast");
        console.log();
    };
    slideLeft() {
        let card_Panel = $('.card-slider').width();
        let item_card = $('.card-div').width() + 10;
        let card_count = card_Panel/item_card;
        let scroll_card = Math.floor(card_count) * item_card;

        $('#' + this.props.applySlidingStyllingId).animate({
            //scrollLeft: "+=230px"
            scrollLeft: "-="+scroll_card+"px"
        }, "fast");
        console.log(scroll_card);
    };
    render() {

    }
}