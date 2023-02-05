import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type Post = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  try {
    if (req.method === "GET") {
      const result = await axios
        .get("http://127.0.0.1:3005/posts")
        .then((res) => res.data);
      return res.status(200).json(result);
    }
  } catch {}

  // GETメソットではない時
  return res.status(500).json;
}
