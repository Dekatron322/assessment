import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles';
import {Colors} from '../../constants/Colors';
import {homeScreenStyle} from '../../styles/screenStyles/HomeScreen';
import GrayCard from '../../components/CustomUIComponents/GrayCard';
import {Spacer} from '../../styles/Spacer';

const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <SafeAreaView style={globalStyles.containerWhite}>
      <StatusBar backgroundColor={Colors.statusBar} />
      <ScrollView
        barStyle="light-content"
        style={homeScreenStyle.screenContainer}>
        <View style={homeScreenStyle.topContainer}>
          <View style={homeScreenStyle.leftContainer}>
            <View>
              <Text style={homeScreenStyle.profileName}> Hello John </Text>
              <Text style={homeScreenStyle.greeting}>
                Your finances are looking good
              </Text>
            </View>
          </View>
          <Spacer size={40} />
          <View style={homeScreenStyle.notificationIconContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: '#2816A7',
                height: 38,
                width: 38,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/bell.png')}
                style={homeScreenStyle.notificationIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#2816A7',
                height: 38,
                width: 38,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/Group.png')}
                style={homeScreenStyle.notificationIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Spacer size={20} />

        <View style={{marginTop: 12}}>
          <ImageBackground
            source={require('../../../assets/icons/Effects.png')}
            style={{borderRadius: 16, overflow: 'hidden'}}
            imageStyle={{borderRadius: 16}}>
            <GrayCard style={{backgroundColor: 'transparent'}}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 6,
                  marginBottom: 14,
                  justifyContent: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    backgroundColor: 'transparent',
                    height: 30,
                    width: 30,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}></View>
                <Image
                  source={require('../../../assets/icons/avt.png')}
                  style={homeScreenStyle.bankLogo}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: '#2310B2',
                    height: 30,
                    width: 30,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/icons/arrow.png')}
                    style={homeScreenStyle.notificationIcon}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 4,

                  justifyContent: 'center',
                }}>
                <Text style={homeScreenStyle.greeting}>
                  Your available balance is
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',

                  justifyContent: 'center',
                }}>
                <Text style={homeScreenStyle.Price}> N20,983</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 60,
                  gap: 4,
                  marginTop: 10,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  By this time last month, you spent slightly higher (N22,719)
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 40,
                }}>
                <Text style={{color: 'white'}}>Kuda bank</Text>
                <Text style={{color: 'white'}}>N12,000.00</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}>
                <Text style={{color: 'white'}}>GT Bank</Text>
                <Text style={{color: 'white'}}>N950.00</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}>
                <Text style={{color: 'white'}}>PiggyVest</Text>
                <Text style={{color: 'white'}}>N1,050.00</Text>
              </View>
            </GrayCard>
          </ImageBackground>
        </View>
        <View style={{marginTop: 15}}>
          <GrayCard>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/icons/settings.png')}
                  style={homeScreenStyle.notificationIcon}
                />
                <View style={{flexDirection: 'column', width: '400'}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                    Sort your transactions
                  </Text>
                  <Text style={{width: 200, fontSize: 12, color: 'white'}}>
                    Get points for sorting your transactions
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#2310B2',
                  height: 30,
                  width: 30,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/icons/arrow.png')}
                  style={homeScreenStyle.notificationIcon}
                />
              </TouchableOpacity>
            </View>
          </GrayCard>
        </View>
        <Text
          style={{
            fontSize: 13,
            color: '#C1B9F9',
            paddingTop: 30,
            paddingBottom: 20,
            fontWeight: '600',
          }}>
          {' '}
          My Budget{' '}
        </Text>
        <View>
          <View
            style={{
              backgroundColor: 'blue',
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'white'}}>You have</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#2310B2',
                  height: 24,
                  width: 24,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                }}>
                <Image
                  source={require('../../../assets/icons/arrow.png')}
                  style={homeScreenStyle.notificationIcon}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '800',
                marginBottom: 24,
              }}>
              N29,880
            </Text>
            <Text style={{color: 'white', marginBottom: 24}}>
              Left out of N80,888 budgeted
            </Text>
            <Image
              source={require('../../../assets/icons/progressbar.png')}
              style={{height: 4, width: '100%'}}
            />
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                marginTop: 24,
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/icons/Title.png')} />
              <Text style={{color: 'white'}}>
                Sapa go soon catch you bros, calm down
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontSize: 13,
            color: '#C1B9F9',
            paddingTop: 30,
            paddingBottom: 20,
            fontWeight: '600',
          }}>
          {' '}
          Transactions{' '}
        </Text>

        <View>
          <View
            style={{
              backgroundColor: 'blue',
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,

                  fontWeight: '600',
                }}>
                Recent Transactions
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#2310B2',
                  height: 24,
                  width: 24,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 13,
                }}>
                <Image
                  source={require('../../../assets/icons/arrow.png')}
                  style={homeScreenStyle.notificationIcon}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
              }}>
              <View
                style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/icons/john.png')}
                  style={homeScreenStyle.notificationIcon}
                />
                <View style={{flexDirection: 'column', width: '400'}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                    John Ogaga
                  </Text>
                  <Text style={{width: 200, fontSize: 12, color: 'white'}}>
                    Zenith Bank 12:03 AM
                  </Text>
                </View>
              </View>
              <Text style={{fontSize: 14, fontWeight: '600', color: '#05EF40'}}>
                +N20,983
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
              }}>
              <View
                style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/icons/habib.png')}
                  style={homeScreenStyle.notificationIcon}
                />
                <View style={{flexDirection: 'column', width: '400'}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                    Habib Yogurt
                  </Text>
                  <Text style={{width: 200, fontSize: 12, color: 'white'}}>
                    GT-Bank 12:03 AM
                  </Text>
                </View>
              </View>
              <Text style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                -N20,983
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/icons/habib.png')}
                  style={homeScreenStyle.notificationIcon}
                />
                <View style={{flexDirection: 'column', width: '400'}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                    Habib Yogurt
                  </Text>
                  <Text style={{width: 200, fontSize: 12, color: 'white'}}>
                    GT-Bank 12:03 AM
                  </Text>
                </View>
              </View>
              <Text style={{fontSize: 14, fontWeight: '600', color: 'white'}}>
                -N20,983
              </Text>
            </View>
          </View>
        </View>
        <Spacer size={150} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
