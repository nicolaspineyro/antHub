import React, {useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';

import {ANT_STATUS, ANT_STATUS_PARSED} from '/utils/constants';
import {generateAntWinLikelihoodCalculator} from 'utils/utils';
import {Button} from 'components/ui';
import {Styles} from './Card.Styles';

interface CardProps {
  item: any;
  setAntsStats: (e: any) => void;
  allPress: boolean;
}

const Card = ({item, setAntsStats, allPress}: CardProps) => {
  const [calcStatus, setCalcStatus] = useState({
    id: item.id,
    status: ANT_STATUS.NOT_TRIGGERED,
    result: 0,
  });

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    handlePress();
  }, [allPress]);

  useEffect(() => {
    setAntsStats(state => {
      const newState = [...state];
      newState[item.id] = calcStatus;
      return newState;
    });
  }, [calcStatus]);

  const getData = data => {
    const result = data * 100;
    setCalcStatus({
      ...calcStatus,
      status: ANT_STATUS.READY,
      result: result.toFixed(2),
    });
  };

  const handlePress = () => {
    setCalcStatus({
      ...calcStatus,
      status: ANT_STATUS.IN_PROGRESS,
    });
    generateAntWinLikelihoodCalculator()(getData);
  };

  const renderCalcStatus = () =>
    !calcStatus.result
      ? ANT_STATUS_PARSED[calcStatus.status]
      : `${ANT_STATUS_PARSED[calcStatus.status]}: ${calcStatus.result}%`;

  const renderAntInfo = () =>
    Object.entries(item).map((entry, index) => (
      <Text
        key={`info-${index}`}
        style={Styles.CardText}>{`${entry[0]}: ${entry[1]}`}</Text>
    ));

  return (
    <View style={Styles.Container}>
      <View style={Styles.TextContainer}>
        {renderAntInfo()}
        <Text style={Styles.CardText}>{renderCalcStatus()}</Text>
      </View>
      <Button title={'Calculate'} onPress={handlePress} />
    </View>
  );
};

export default Card;
