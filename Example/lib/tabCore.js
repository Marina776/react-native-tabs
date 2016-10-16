//@flow

import React from "react";

import {
	StyleSheet,
	View,
  Image,
	Text,
	TouchableOpacity,
	Keyboard,
	Platform,
} from "react-native";

export default class Tabs extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
      keyboardUp: false,
      currentTabView: {}
    };

    this.onSelect = this.onSelect.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);
    this.keyboardWillShow = this.keyboardWillShow.bind(this);
  }

  onSelect(el: any){
    if (el.props.onSelect) {
      el.props.onPress(el);
    } else if (this.props.onSelect) {
      this.props.onPress(el);
    }
  }

  componentWillMount(){
    if (Platform.OS === "android") {
      Keyboard.addListener("keyboardDidShow", this.keyboardWillShow);
      Keyboard.addListener("keyboardDidHide", this.keyboardWillHide);
    }
  }

  keyboardWillShow(e: any) {
  	this.setState({ keyboardUp: true });
  };

  keyboardWillHide(e: any) {
    this.setState({ keyboardUp: false });
  };

  render() {
		const self = this;
		let selected = this.props.selected;
		if (!selected){
			React.Children.forEach(this.props.children.filter(c=>c), (el: any): void=>{
				if (!selected || el.props.initial){
						selected = el.props.name || el.key;
				}
			});
		}
		return (
      <View>
        {}
  			<View style={[styles.tabbarView, this.props.style, this.state.keyboardUp && styles.hidden]}>

  				{React.Children.map(this.props.children.filter(c=>c), (el)=>
  					<TouchableOpacity key={el.props.name + "touch"}
  						testID={el.props.testID}
  						style={[styles.iconView, this.props.iconStyle, (el.props.name || el.key) == selected ? this.props.selectedIconStyle || el.props.selectedIconStyle || {} : {} ]}
  						onPress={():void=>!self.props.locked && self.onSelect(el)}
  						onLongPress={()=>self.onSelect(el)}
  						activeOpacity={el.props.pressOpacity}>
  							{selected == (el.props.name || el.key) ? React.cloneElement(el, {selected: true, style: [el.props.style, this.props.selectedStyle, el.props.selectedStyle]}) : el}
  					</TouchableOpacity>

  				)}
  			</View>
      </View>
		);
  }
}

Tabs.Item = class TabItem extends React.Component {
  state: any;
  title: string;
  icon: string;
  selectedIcon: ?string;
  selected: boolean;
  onPress: ?() => void;

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

const styles = StyleSheet.create({
	tabbarView: {
		position:"absolute",
		bottom:0,
		right:0,
		left:0,
		height:50,
		opacity:1,
		backgroundColor:"transparent",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",

		flex: 1
	},
	topBorder: {
		flexDirection: 'row',
		position:"absolute",
		top: 0,
		backgroundColor: 'red',
		height: 10,
	},
	iconView: {
		flex: 1,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	hidden: {
		height: 0,
	},
});
