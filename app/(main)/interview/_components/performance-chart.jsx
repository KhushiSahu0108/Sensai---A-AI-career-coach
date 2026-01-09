"use client";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RechartsDevtools } from '@recharts/devtools';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PerformanceChart = ({ assessments }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (assessments && assessments.length > 0) {
            const formattedData = assessments.map((assessment, index) => ({
                id: index,
                date: format(new Date(assessment.createdAt), "MMM dd"),
                time: format(new Date(assessment.createdAt), "HH:mm"), // Add time
                fullDate: format(new Date(assessment.createdAt), "MMM dd, HH:mm"), // For tooltip
                displayLabel: `Quiz ${index + 1}`,
                score: Number(assessment.quizScore),
            }))

            setChartData(formattedData);
        }
    }, [assessments])

    return (
        <Card>
            <CardHeader>
                <CardTitle className="gradient-title text-3xl md:text-4xl">
                    Performance Trend
                </CardTitle>
                <CardDescription>Your quiz scores over time</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-75">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="displayLabel" />
                            <YAxis domain={[0, 100]} />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload?.length) {
                                        return (
                                            <div className="bg-background border rounded-lg p-2 shadow-md">
                                                <p className="text-sm font-medium">
                                                    Score: {payload[0].value}%
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {payload[0].payload.fullDate}
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="score"
                                stroke="#ffffff" // Try a bright purple
                                strokeWidth={2}
                                dot={{ fill: '#ffffff', r: 3 }}
                                activeDot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}

export default PerformanceChart