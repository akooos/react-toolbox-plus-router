// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';
import theme from 'react-toolbox/lib/button/theme';
import themedRippleFactory from 'react-toolbox/lib/ripple';
import {BUTTON} from 'react-toolbox/lib/identifiers';
import {themr} from 'react-css-themr';

import {buttonFactory} from './Button.js';
import {iconButtonFactory} from './IconButton';

const Button = buttonFactory(themedRippleFactory({ centered: false }), FontIcon);
const IconButton = iconButtonFactory(themedRippleFactory({centered: true}), FontIcon);
const ThemedButton = themr(BUTTON, theme)(Button);
const ThemedIconButton = themr(BUTTON, theme)(IconButton);

export default ThemedButton;
export {ThemedButton as Button};
export {ThemedIconButton as IconButton};
