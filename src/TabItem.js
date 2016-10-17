/**
 * The examples provided by Uncle Charlie are for non-commercial testing and
 * evaluation purposes only.
 *
 * Uncle Charlie reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule TabItem
 * @flow-weak
 */

import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

type Props = {
  title: string,
  icon: any,
  selectedIcon: ?any,
  selected: boolean,
  onPress: ?() => void,
  onSelect: () => void,

};

export default class TabItem extends React.Component {
  state: any;
  props: Props;
  _renderTabIcon: ()=>ReactElement<*>;

  constructor(props) {
    super(props);

    this.state = {

    };

    this._renderTabIcon = this._renderTabIcon.bind(this);
  }

  render() {
    let itemSelected = this.props.selected;

    return (
      <View style={{alignItems: 'center', justifyContent: 'center', padding: 5}}>
        <Image source={itemSelected ? this.props.selectedIcon : this.props.icon} />
        <Text style={itemSelected ? {color: 'blue'}: {color: 'black'}}>{this.props.title}</Text>
      </View>
    );
  }
}
