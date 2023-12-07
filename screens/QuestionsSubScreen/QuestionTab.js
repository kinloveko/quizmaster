import { View, Text,FlatList,TouchableOpacity,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import Icon, { Icons } from '../../theme/Icons'
import { themeColors } from '../../theme';

export default function QuestionTab() {

  const flatlistValues = [
    {
      Set:'Multiple choice',
      Question: 'Which data structure is typically used to implement',
      Difficulty: 'Easy',
      Category:'Data Structures',
      Time:'20 seconds'
    },
    {
      Set:'Multiple choice',
      Question: 'Which data structure is typically used to implement',
      Difficulty: 'Hard',
      Category:'Data Structures',
      Time:'10 seconds'
    },
    {
      Set:'True or False',
      Question: 'Which data structure is typically used to implement',
      Difficulty: 'Medium',
      Category:'Data Structures',
      Time:'15 seconds'
    },
    {
      Set:'Multiple choice',
      Question: 'Which data structure is typically used to implement',
      Difficulty: 'Easy',
      Category:'Data Structures',
      Time:'20 seconds'
    },
    {
      Set:'Multiple choice',
      Question: 'Which data structure is typically used to implement',
      Difficulty: 'Medium',
      Category:'Data Structures',
      Time:'15 seconds'
    },
  ]
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={{fontWeight:'400',color:'#706E6D',fontSize:11,marginBottom:5}}>{`${item.Set}`}</Text>
      <Text numberOfLines={1} style={{color:themeColors.semiBlack,fontWeight:'bold',fontSize:13,paddingEnd:10}}>{`Q: ${item.Question}`}</Text>
      <View style={{flexDirection:'row',marginTop:20}}>
      <Text style={{color:'#706E6D',fontWeight:'300',fontSize:11,marginEnd:15}}>{`${item.Difficulty}`}</Text>
      <Text style={{color:'#706E6D',fontWeight:'300',fontSize:11,marginEnd:15}}>{`${item.Category}`}</Text>
      <Text style={{color:'#706E6D',fontWeight:'300',fontSize:11,}}>{`${item.Time}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
     <View style={styles.inputContainer} >
     <TextInput
        placeholder={'Search'}
        style={ styles.input }
        placeholderTextColor={'#706E6D'}
       // autoCapitalize="none"
      />
      <Icon type={Icons.Feather} name={'search'} size={20} color={themeColors.semiBlack} style={styles.icon} />
     </View>

     <View style={{marginTop:20,marginStart:5}}>
      <Text style={{color: themeColors.semiBlack}}>Filters:</Text>
     </View>
     <View style={{marginTop:20,flex:1,paddingEnd:13}}>
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={flatlistValues}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Use a unique key for each item
      />
     </View>
     <TouchableOpacity style={{bottom:100,right:8,position:'absolute'}}>
     <View style={styles.badgeStyle}>
      <Text style={{fontSize:11,color:'white',fontWeight:'bold'}}>3</Text>
     </View>  
      <View style={styles.filterStyle}>
    
      <Icon type={Icons.Feather} name={'filter'} size={20} color={'#706E6D'} />
      </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  badgeStyle:{
    backgroundColor:themeColors.fullscaleGreen,
    alignSelf:'flex-end',paddingStart:8,
    paddingEnd:8,
    paddingTop:6,
    paddingBottom:5,
    borderRadius:90,
    marginBottom:-15,
    marginEnd:-8,
    zIndex:999,
  
      },
  filterStyle:{
        backgroundColor:'white',
        padding:13,borderRadius:90,
        shadowColor: '#00000080',
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 0.5,
        shadowRadius: 4.5,
        elevation:10
    }, 
  itemContainer: {
    elevation:2,
    padding: 16,
    borderRadius:10,
    borderWidth: 1,
    borderColor: "#d3d3d390",
    marginBottom:10,
    backgroundColor:'white'
  },
  container:{
    backgroundColor:'#F8F9FA',
    flex:1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop:10,
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor:'white',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 35, 
  },

});