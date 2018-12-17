import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation'
  
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home',
        };
    }

    tabs = [
        {
            key: 'home',
            icon: 'home',
            label: 'Home',
            barColor: 'rgba(22, 150, 24, 1.0)',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'bills',
            icon: 'attach-money',
            label: 'Bills',
            barColor: 'rgba(22, 145, 24, 1.0)',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'settings',
            icon: 'settings',
            label: 'Settings',
            barColor: 'rgba(22, 140, 24, 1.0)',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    render() {
        
        let renderTabContents;
        if(this.state.activeTab == 'home') {
            renderTabContents = <Text>Home Tab</Text>;
        }
        else if(this.state.activeTab == 'bills') {
            renderTabContents = <Text>Bills Tab</Text>;
        }
        else if(this.state.activeTab == 'settings') {
            renderTabContents = <Text>Settings Tab</Text>;
        }
        
        return (
        <View style ={styles.container}>
            <View style={styles.contentContainer}>
            { 
                renderTabContents /* Screen contents depending on current tab. */
            }
            </View>
            <BottomNavigation
                activeTab={this.state.activeTab}
                onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                renderTab={this.renderTab}
                tabs={this.tabs}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingTop: 30,
    },
});