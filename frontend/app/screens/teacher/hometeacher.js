import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
export default function Homestudent() 
{
    const user= useSelector((state) => state.user.currentUser)
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View>
          <View style={styles.actionWrap}>
            <View style={styles.actionWrapper}>

            
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('profilsetting')
              }}
              style={{ marginRight: 'auto' }}>
              <View style={styles.action}>
              <FeatherIcon
                  color="#6a99e3"
                  name="user"
                  size={22} />
             
              </View>
            </TouchableOpacity>

            <Text>Hello ,{user.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <FeatherIcon
                  color="#6a99e3"
                  name="bell"
                  size={22} />
              </View>
            </TouchableOpacity>

           
            
     
          </View>

          

          
        </View>
        <View style={styles.first}>
        <TouchableOpacity style={styles.item} onPress={() => {
                navigation.navigate('addlesson')
              }}>
        <Ionicons name="add-circle-outline" size={24} color="#007AFF" /> 
        <Text style={styles.itemText}>add course</Text>
      </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    marginTop: 24,
    marginBottom: 16,
  },
  /** Action */
  action: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: '#e8f0f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  actionWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: -8,
  },
  /** Search */
  search: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
  },
  /** Input */
  
  /** Button */
  first:{
    justifyContent: 'center',
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
    backgroundColor: 'transparent',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
});