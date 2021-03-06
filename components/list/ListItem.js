import React, { Component, PropTypes } from 'react';
import { themr } from 'react-css-themr';
import { LIST } from 'react-toolbox/lib/identifiers.js';
import {Link as RrLink} from 'react-router';
import InjectListItemContent from 'react-toolbox/lib/list/ListItemContent.js';
import InjectListItemLayout from 'react-toolbox/lib/list/ListItemLayout.js';
import rippleFactory from 'react-toolbox/lib/ripple/Ripple.js';

const factory = (ripple, ListItemLayout, ListItemContent) => {
  class ListItem extends Component {
    static propTypes = {
      children: PropTypes.any,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      ripple: PropTypes.bool,
      theme: PropTypes.shape({
        listItem: PropTypes.string
      }),
      to: PropTypes.string
    };

    static defaultProps = {
      className: '',
      disabled: false,
      ripple: false
    };

    handleClick = (event) => {
      if (this.props.onClick && !this.props.disabled) {
        this.props.onClick(event);
      }
    };

    groupChildren () {
      const children = {
        leftActions: [],
        rightActions: [],
        ignored: []
      };

      React.Children.forEach(this.props.children, (child, i) => {
        if (!React.isValidElement(child)) {
          return;
        }

        const { listItemIgnore, ...rest } = child.props;
        const strippedChild = { ...child, ...{ props: rest } };

        if (listItemIgnore) {
          children.ignored.push(strippedChild);
          return;
        }
        if (child.type === ListItemContent) {
          children.itemContent = strippedChild;
          return;
        }
        const bucket = children.itemContent ? 'rightActions' : 'leftActions';
        children[bucket].push({...strippedChild, key: i});
      });

      return children;
    }

    render () {
      const {
        activeClassName,
        activeOnlyWhenExact,
        activeStyle,
        className,
        isActive,
        onClick,
        onMouseDown,
        onTouchStart,
        ripple: hasRipple,
        theme,
        to,
        ...other
      } = this.props; //eslint-disable-line no-unused-vars
      const children = this.groupChildren();
      const content = <ListItemLayout theme={theme} {...children} {...other}/>;
      return (
        <li className={`${theme.listItem} ${className}`} onClick={this.handleClick} onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
          {to
            ? <RrLink
                activeStyle={activeStyle}
                activeClassName={activeClassName}
                activeOnlyWhenExact={activeOnlyWhenExact}
                isActive={isActive}
                to={to}>
                {content}
              </RrLink>
            : content
          }
          {children.ignored}
        </li>
      );
    }
  }

  return ripple(ListItem);
};

const ripple = rippleFactory({ centered: false, listItemIgnore: true });
const ListItem = factory(ripple, InjectListItemLayout, InjectListItemContent);

export default themr(LIST)(ListItem);
export { factory as listItemFactory };
export { ListItem };

