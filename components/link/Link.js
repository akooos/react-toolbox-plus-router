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

import classnames from 'classnames';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';
import React, {PropTypes} from 'react';
import {Link as RrLink} from 'react-router';
import {LINK} from 'react-toolbox/lib/identifiers';
import {themr} from 'react-css-themr';

const Link = ({active, children, className, count, href, icon, label, theme, ...others}) => {
  const _className = classnames(theme.link, {
    [theme.active]: active
  }, className);

  return (
    <RrLink data-react-toolbox='link' to={href} className={_className} {...others}>
      {icon ? <FontIcon className={theme.icon} value={icon} /> : null}
      {label ? <abbr>{label}</abbr> : null}
      {count && parseInt(count) !== 0 ? <small>{count}</small> : null}
      {children}
    </RrLink>
  );
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  label: PropTypes.string,
  theme: PropTypes.shape({
    active: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string
  })
};

Link.defaultProps = {
  active: false,
  className: ''
};

export default themr(LINK)(Link);
export { Link };
