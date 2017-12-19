import styled, {css}   from 'styled-components';

//Sizes for media templates
const sizes = {
    maxPhone: 768,
    minTablet: 769,
    maxTablet: 992,
    minSmall: 993,
    maxSmall: 1200,
    minLarge: 1201
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => {
        var limit = (label.indexOf('min') === -1) ? 'max' : 'min';
        return css`
            @media (${limit}-width: ${sizes[label] / 16}em) {
                ${css(...args)}
            }
        }
	    `;
    }
	return acc;
}, {});

export default {
    media,
}