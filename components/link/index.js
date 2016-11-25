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

import theme from 'react-toolbox/lib/link/theme';
import {LINK} from 'react-toolbox/lib/identifiers';
import {themr} from 'react-css-themr';

import {Link} from './Link';

const ThemedLink = themr(LINK, theme)(Link);

export default ThemedLink;
export {ThemedLink as Link};
