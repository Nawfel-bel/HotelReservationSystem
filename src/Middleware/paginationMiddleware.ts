import { Request, Response, NextFunction } from 'express';

interface PaginatedResult {
  next?: {
    page: number;
    limit: number;
  };
  previous?: {
    page: number;
    limit: number;
  };
  results: any[];
}

const paginationMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.log('[pagination middleware]\n')
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results: PaginatedResult = {
    results: [],
  };

  const data: any[] = res.locals.data;
  try {
    const totalCount = data.length;

    if (endIndex < totalCount) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = await data.slice(startIndex, endIndex);

    res.locals.paginatedResult = results;
    next();
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export { paginationMiddleware };