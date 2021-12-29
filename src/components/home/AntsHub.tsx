import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Card, Button, Colors} from '/components/ui';
import {Styles} from './AntsHub.styles';
import {ANT_STATUS, ANT_STATUS_PARSED} from '/utils/constants';

interface HubProps {
  data: Array<any>;
  signOut: () => void;
}

const AntsHub = ({data, signOut}: HubProps) => {
  const [antsStats, setAntsStats] = useState(
    data.map(item => ({
      id: item.id,
      status: '',
      result: 0,
    })),
  );

  const [statsInfo, setStatsinfo] = useState({
    NOT_TRIGGERED: 0,
    IN_PROGRESS: 0,
    READY: 0,
  });

  const [allPress, setAllPress] = useState(false);

  useEffect(() => {
    const count = {
      NOT_TRIGGERED: 0,
      IN_PROGRESS: 0,
      READY: 0,
    };

    antsStats.forEach(el => {
      count[el.status] = count[el.status] + 1;
    });

    setStatsinfo(count);
  }, [antsStats]);

  const handlePress = () => setAllPress(!allPress);

  const renderItem = ({item, index}: any) => {
    const cardProps = {
      item,
      setAntsStats,
      allPress,
      index,
    };
    return <Card {...cardProps} key={`card-${item.id}`} />;
  };

  const renderAntStats = () => {
    const stats = Object.keys(statsInfo);
    return (
      <View style={Styles.AntsStats}>
        <Text style={Styles.AntsStatsHeading}>Calculation State</Text>
        {stats.map((stat, index) => (
          <Text key={`stat-${index}`}>{`${
            ANT_STATUS_PARSED[ANT_STATUS[stat]]
          }: ${statsInfo[stat]}`}</Text>
        ))}
      </View>
    );
  };

  const sortedData = data.sort((a, b) => {
    return antsStats[b.id]?.result - antsStats[a.id]?.result;
  });

  return (
    <View style={Styles.Container}>
      <View style={Styles.buttonsContainer}>
        <Button title="Log Out" onPress={signOut} color={Colors.red} />
        <Button
          title={'Calculate All'}
          onPress={handlePress}
          color={Colors.green}
        />
      </View>
      {renderAntStats()}
      <FlatList
        data={sortedData}
        renderItem={renderItem}
        style={Styles.flatList}
      />
    </View>
  );
};

export default AntsHub;
