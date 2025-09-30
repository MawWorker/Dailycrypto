"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Archive,
  Calendar,
  Clock,
  Search,
  Grid3X3,
  List,
  CalendarDays,
  BarChart3,
  FileText,
  ChevronDown,
  Filter
} from 'lucide-react';
import { formatRelativeTime } from '@/lib/format';
import { cn } from '@/lib/utils';

interface ArchiveItem {
  id: string;
  title: string;
  slug: string;
  type: 'daily' | 'weekly' | 'monthly';
  date: string;
  storiesCount: number;
  readingTime: number;
}

// Generate clean, simple archive data
export function generateArchiveData(): ArchiveItem[] {
  const archives = [];
  const today = new Date('2024-12-20');
  
  // Generate 30 daily recaps
  for (let i = 0; i < 30; i++) {
    const date = new Date(today.getTime() - (i * 24 * 60 * 60 * 1000));
    archives.push({
      id: `daily-${i}`,
      title: `Daily Recap`,
      slug: `daily-recap-${date.toISOString().split('T')[0]}`,
      type: 'daily' as const,
      date: date.toISOString(),
      storiesCount: 12 + (i % 8),
      readingTime: 5 + (i % 3)
    });
  }
  
  // Generate 8 weekly summaries
  for (let i = 0; i < 8; i++) {
    const date = new Date(today.getTime() - (i * 7 * 24 * 60 * 60 * 1000));
    archives.push({
      id: `weekly-${i}`,
      title: `Weekly Summary`,
      slug: `weekly-summary-${date.toISOString().split('T')[0]}`,
      type: 'weekly' as const,
      date: date.toISOString(),
      storiesCount: 45 + (i * 2),
      readingTime: 12 + (i % 4)
    });
  }
  
  // Generate 3 monthly reports
  for (let i = 0; i < 3; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    archives.push({
      id: `monthly-${i}`,
      title: `Monthly Report`,
      slug: `monthly-report-${date.toISOString().split('T')[0].substring(0, 7)}`,
      type: 'monthly' as const,
      date: date.toISOString(),
      storiesCount: 180 + (i * 10),
      readingTime: 25 + (i * 3)
    });
  }

  return archives.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function ArchivesContent() {
  const [archives, setArchives] = useState<ArchiveItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string>('2024');

  useEffect(() => {
    const archiveData = generateArchiveData();
    setArchives(archiveData);
    setIsLoading(false);
  }, []);

  // Filter archives
  const filteredArchives = archives.filter(archive => {
    const matchesSearch = !searchQuery || 
      archive.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'all' || archive.type === selectedType;
    
    const archiveYear = new Date(archive.date).getFullYear().toString();
    const matchesYear = selectedYear === 'all' || archiveYear === selectedYear;
    
    return matchesSearch && matchesType && matchesYear;
  });

  // Group by month for timeline view
  const groupedByMonth = filteredArchives.reduce((acc, archive) => {
    const monthKey = new Date(archive.date).toLocaleDateString('en-PH', { 
      year: 'numeric', 
      month: 'long' 
    });
    if (!acc[monthKey]) acc[monthKey] = [];
    acc[monthKey].push(archive);
    return acc;
  }, {} as Record<string, ArchiveItem[]>);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'daily': return Calendar;
      case 'weekly': return CalendarDays;
      case 'monthly': return BarChart3;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'daily': return 'bg-blue-500';
      case 'weekly': return 'bg-green-500';
      case 'monthly': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="h-12 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
          <div className="h-6 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
        </div>
        
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="rounded-xl animate-pulse">
              <CardContent className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Clean Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Archives
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Browse our complete collection of daily recaps, weekly summaries, and monthly reports.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--color-text-primary)]">
            {archives.filter(a => a.type === 'daily').length}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">Daily</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--color-text-primary)]">
            {archives.filter(a => a.type === 'weekly').length}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">Weekly</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[var(--color-text-primary)]">
            {archives.filter(a => a.type === 'monthly').length}
          </div>
          <div className="text-sm text-[var(--color-text-secondary)]">Monthly</div>
        </div>
      </div>

      {/* Simple Filters */}
      <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)]">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
              <Input
                placeholder="Search archives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-lg border-[var(--color-muted-subtle)]"
              />
            </div>
            
            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] min-w-[120px]"
            >
              <option value="all">All Types</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            {/* View Toggle */}
            <div className="flex bg-[var(--color-muted-subtle)] rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-md px-3"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-md px-3"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-3 text-center">
            <span className="text-sm text-[var(--color-text-secondary)]">
              {filteredArchives.length} archives found
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Archives Display */}
      {viewMode === 'grid' ? (
        /* Grid View */
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredArchives.map((archive) => (
            <Link key={archive.id} href={`/archives/${archive.slug}`}>
              <Card className="group rounded-xl bg-[var(--color-surface)] hover:shadow-md transition-all duration-200 border border-[var(--color-muted-subtle)] h-full">
                <CardContent className="p-4 space-y-3">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      <div className={cn("w-2 h-2 rounded-full mr-2", getTypeColor(archive.type))} />
                      {archive.type}
                    </Badge>
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      {archive.storiesCount} stories
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-sm group-hover:text-[var(--color-primary-brand)] transition-colors">
                    {archive.title}
                  </h3>
                  
                  {/* Date */}
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    {new Date(archive.date).toLocaleDateString('en-PH', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  
                  {/* Reading Time */}
                  <div className="flex items-center space-x-1 text-xs text-[var(--color-text-secondary)]">
                    <Clock className="h-3 w-3" />
                    <span>{archive.readingTime}m read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-2">
          {filteredArchives.map((archive) => {
            const TypeIcon = getTypeIcon(archive.type);
            return (
              <Link key={archive.id} href={`/archives/${archive.slug}`}>
                <Card className="group rounded-xl bg-[var(--color-surface)] hover:shadow-sm transition-all duration-200 border border-[var(--color-muted-subtle)]">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", getTypeColor(archive.type))}>
                          <TypeIcon className="h-4 w-4 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm group-hover:text-[var(--color-primary-brand)] transition-colors">
                            {archive.title}
                          </h3>
                          <div className="flex items-center space-x-3 text-xs text-[var(--color-text-secondary)] mt-1">
                            <span>
                              {new Date(archive.date).toLocaleDateString('en-PH', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                            <span>•</span>
                            <span>{archive.storiesCount} stories</span>
                            <span>•</span>
                            <span>{archive.readingTime}m read</span>
                          </div>
                        </div>
                      </div>
                      
                      <Badge variant="outline" className="text-xs">
                        {archive.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      {/* Timeline View (Alternative Organization) */}
      {viewMode === 'grid' && selectedType === 'all' && !searchQuery && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 text-center">
            Timeline View
          </h2>
          
          <div className="space-y-8">
            {Object.entries(groupedByMonth).map(([month, monthArchives]) => (
              <div key={month} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-primary-brand)] rounded-full" />
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {month}
                  </h3>
                  <div className="flex-1 h-px bg-[var(--color-muted-subtle)]" />
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {monthArchives.length} archives
                  </span>
                </div>
                
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ml-6">
                  {monthArchives.map((archive) => {
                    const TypeIcon = getTypeIcon(archive.type);
                    return (
                      <Link key={archive.id} href={`/archives/${archive.slug}`}>
                        <Card className="group rounded-lg bg-[var(--color-surface)] hover:shadow-sm transition-all duration-200 border border-[var(--color-muted-subtle)]">
                          <CardContent className="p-3 space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className={cn("w-6 h-6 rounded-md flex items-center justify-center", getTypeColor(archive.type))}>
                                  <TypeIcon className="h-3 w-3 text-white" />
                                </div>
                                <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                                  {archive.type}
                                </span>
                              </div>
                              <span className="text-xs text-[var(--color-text-secondary)]">
                                {new Date(archive.date).getDate()}
                              </span>
                            </div>
                            
                            <h4 className="font-medium text-sm group-hover:text-[var(--color-primary-brand)] transition-colors">
                              {archive.title}
                            </h4>
                            
                            <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                              <span>{archive.storiesCount} stories</span>
                              <span>{archive.readingTime}m</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredArchives.length === 0 && (
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)]">
          <CardContent className="p-12 text-center space-y-4">
            <Archive className="h-12 w-12 mx-auto text-[var(--color-text-secondary)]/50" />
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">No Archives Found</h3>
            <p className="text-[var(--color-text-secondary)]">
              Try adjusting your search or filter criteria.
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedType('all');
                setSearchQuery('');
                setSelectedYear('2024');
              }}
              className="rounded-lg"
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}