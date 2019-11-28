import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NotificationText } from '../../../constants';
import { AppContext } from '../../../context';
import { NativeImage } from '../../../layout';
import { Typography } from '../../../theme';
import { ThemeColors } from '../../../types';
import { parseTimeElapsed } from '../../../utils';

const { FontWeights, FontSizes } = Typography;

const NotificationCard = ({ avatar, handle, type, time }) => {

  const { theme } = useContext(AppContext);
  const notificationText = NotificationText[type];
  const timeElapsed = parseTimeElapsed(time);

  return (
    <View style={styles().container}>
      <NativeImage uri={avatar} style={styles(theme).avatarImage} />
      <View style={styles().info}>
        <Text style={styles(theme).notificationText}>
          <Text style={styles(theme).handleText}>{handle}{' '}</Text>
          {notificationText}
        </Text>
        <Text style={styles(theme).timeText}>{timeElapsed}</Text>
      </View>
    </View>
  );
};

const styles = (theme = {} as ThemeColors) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5
  },
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: theme.placeholder
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  handleText: {
    ...FontWeights.Regular,
    ...FontSizes.Body,
    color: theme.text01
  },
  notificationText: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    color: theme.text01
  },
  timeText: {
    ...FontWeights.Light,
    ...FontSizes.Caption,
    color: theme.text02,
    paddingTop: 5
  }
});

export default NotificationCard;