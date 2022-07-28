import { Request, Response } from "express";
import { URLModel } from "../model/URL";
import shortId from "shortid";
import { config  } from "../config/Constants";

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        // Check if URL already exists
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL });
        if (url) {
            res.status(200).json(url);
            return;
        }

        // Create the Hash for the URL
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;

        // Create the URL
        const newURL = await URLModel.create({
            hash,
            originURL,
            shortURL,
        })
        res.status(200).json(newURL);

        // Save the URL


        // Return the URL
    }

    
    public async redirect(req: Request, res: Response): Promise<void> {
        // Get the URL hash
        const { hash } = req.params;
        // Find the original URL from the hash
        const url = await URLModel.findOne({ hash });
        if(url) {
            res.redirect(url.originURL);
            return;
        }
        // Redirect to the original URL from the database
        res.status(404).send("error: URL not found");
    }
}