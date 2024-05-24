import {View, Text, Image} from 'react-native';
import React from 'react';
import {budgetComponent} from '../../styles/componentStyles/BudgetComponent';

const BudgetComponent = ({name, amount}) => {
  return (
    <View style={budgetComponent.singleTransaction}>
      {/* <View style={budgetComponent.iconContainer}> */}
      {name === 'Food' ? (
        <Image
          source={require('../../../assets/icons/food.png')}
          style={budgetComponent.icon}
        />
      ) : name === 'Education' ? (
        <Image
          source={require('../../../assets/icons/education.png')}
          style={budgetComponent.icon}
        />
      ) : name === 'Healthcare' ? (
        <Image
          source={require('../../../assets/icons/heathcare-small.png')}
          style={budgetComponent.icon}
        />
      ) : (
        <Image
          source={require('../../../assets/icons/housing-small.png')}
          style={budgetComponent.icon}
        />
      )}
      {/* </View> */}

      <View style={budgetComponent.amountContainer}>
        <View>
          <Text style={budgetComponent.amount}> {name} </Text>
          <Text style={budgetComponent.beneficiary}>
            {' '}
            Remaining NGN20,000.00{' '}
          </Text>
        </View>
        <Text style={budgetComponent.amount}> {`₦${amount}`} </Text>
      </View>
    </View>
  );
};

export default BudgetComponent;
