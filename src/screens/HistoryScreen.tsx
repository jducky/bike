import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface RideRecord {
  id: string;
  date: string;
  distance: number;
  duration: number;
  avgSpeed: number;
}

const mockData: RideRecord[] = [
  {
    id: '1',
    date: '2024-07-12',
    distance: 15.2,
    duration: 3600,
    avgSpeed: 15.2,
  },
  {
    id: '2',
    date: '2024-07-10',
    distance: 22.5,
    duration: 4500,
    avgSpeed: 18.0,
  },
];

export default function HistoryScreen() {
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}시간 ${minutes}분`;
  };

  const renderRideItem = ({ item }: { item: RideRecord }) => (
    <TouchableOpacity style={styles.rideCard}>
      <View style={styles.cardHeader}>
        <View style={styles.dateContainer}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.statGroup}>
          <View style={styles.stat}>
            <Ionicons name="trail-sign-outline" size={20} color="#2196F3" />
            <Text style={styles.statLabel}>거리</Text>
            <Text style={styles.statValue}>{item.distance} km</Text>
          </View>
          
          <View style={styles.stat}>
            <Ionicons name="time-outline" size={20} color="#4CAF50" />
            <Text style={styles.statLabel}>시간</Text>
            <Text style={styles.statValue}>{formatDuration(item.duration)}</Text>
          </View>
          
          <View style={styles.stat}>
            <Ionicons name="speedometer-outline" size={20} color="#FF9800" />
            <Text style={styles.statLabel}>평균속도</Text>
            <Text style={styles.statValue}>{item.avgSpeed} km/h</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>라이딩 기록</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter-outline" size={20} color="#2196F3" />
        </TouchableOpacity>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>이번 달 요약</Text>
        <View style={styles.summaryStats}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>총 거리</Text>
            <Text style={styles.summaryValue}>37.7 km</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>총 시간</Text>
            <Text style={styles.summaryValue}>2시간 15분</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>라이딩 횟수</Text>
            <Text style={styles.summaryValue}>2회</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={mockData}
        renderItem={renderRideItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  filterButton: {
    padding: 8,
  },
  summaryCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  rideCard: {
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  cardBody: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  statGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});