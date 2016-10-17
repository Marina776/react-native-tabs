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
 * @flow
 */

import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

type Props = {
  title: string,
  icon: string,
  selectedIcon: ?string,
  selected: boolean,
  onPress: ?() => void,
  onSelect: () => void,

};

export default class TabItem extends React.Component {
  state: any;
  props: Props;

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', padding: 5}}>
        <Image source={this.props.icon} />
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
