import {View, Text, Image} from 'react-native';
import React from 'react';
import {recentTransaction} from '../../styles/componentStyles/RecentTransaction';
// import {test_transation_data} from '../../test_data';

const RecentTransaction = ({amount, beneficiary, sent, type}) => {
  return (
    <View style={recentTransaction.singleTransaction}>
      <View style={recentTransaction.iconContainer}>
        <Image
          source={require('../../../assets/icons/money-send.png')}
          style={recentTransaction.icon}
        />
      </View>

      <View style={recentTransaction.amountContainer}>
        <View>
          <Text style={recentTransaction.amount}> {type} </Text>
          <Text style={recentTransaction.beneficiary}> 2 Trasactions </Text>
        </View>
        <Text style={recentTransaction.amount}> {`₦${amount}`} </Text>
      </View>
    </View>
  );
};

export default RecentTransaction;
