/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import NavsExample from './Navs';
import NavVerticalExample from './NavVertical';
import NavTabsExample from './NavTabs';
import NavPillsExample from './NavPills';
const NavsExampleSource = require('!!raw-loader!./Navs');
const NavVerticalExampleSource = require('!!raw-loader!./NavVertical');
const NavTabsExampleSource = require('!!raw-loader!./NavTabs');
const NavPillsExampleSource = require('!!raw-loader!./NavPills');

export default class NavssPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Nav Components" />
        <h3>Navs</h3>
        <div className="docs-example">
          <NavsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavsExampleSource}
          </PrismCode>
        </pre>
        <h4>Nav Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Nav.propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  card: PropTypes.bool,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavItem Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h4>NavLink Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`NavLink.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}`}
          </PrismCode>
        </pre>
        <h3>Vertical</h3>
        <div className="docs-example">
          <NavVerticalExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavVerticalExampleSource}
          </PrismCode>
        </pre>
        <h3>Tabs</h3>
        <div className="docs-example">
          <NavTabsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavTabsExampleSource}
          </PrismCode>
        </pre>
        <h3>Pills</h3>
        <div className="docs-example">
          <NavPillsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {NavPillsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
