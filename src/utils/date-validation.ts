const validateDateRange = (startDate: Date, endDate: string): { start: Date; end: Date } => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start < now) {
        throw new Error("Start date cannot be in the past.");
    }

    if (end <= start) {
        throw new Error("End date must be after the start date.");
    }

    if (end.getTime() - start.getTime() <= 0) {
        throw new Error("Invalid date range.");
    }

    return { start, end };
};
