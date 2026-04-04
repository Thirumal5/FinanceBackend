import Record from "../models/Record.js";

export const getDashboardSummary = async (req, res) => {
    try {
        const summary = await Record.aggregate([
            {
                $facet: {
                    totals: [
                        {
                            $group: {
                                _id: null,
                                totalIncome: {
                                    $sum: { $cond: [{ $eq: ["$type", "income"] }, "$amount", 0] }
                                },
                                totalExpense: {
                                    $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] }
                                }
                            }
                        },
                        {
                            $project: {
                                _id: 0,
                                totalIncome: 1,
                                totalExpense: 1,
                                balance: { $subtract: ["$totalIncome", "$totalExpense"] }
                            }
                        }
                    ],
                    categoryTotals: [
                        {
                            $group: {
                                _id: "$category",
                                total: { $sum: "$amount" }
                            }
                        },
                        { $sort: { total: -1 } }
                    ],
                    recentRecords: [
                        { $sort: { date: -1 } },
                        { $limit: 5 }
                    ]
                }
            }
        ]);

        const data = summary[0];
        const dashboardData = {
            totals: data.totals[0] || { totalIncome: 0, totalExpense: 0, balance: 0 },
            categoryTotals: data.categoryTotals,
            recentRecords: data.recentRecords
        };

        res.status(200).json({
            success: true,
            message: "Dashboard summary retrieved successfully",
            data: dashboardData
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
