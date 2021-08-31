const router = require("express").Router();
const { CampaignProduct, Product, Campaign } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const campaignProductData = await CampaignProduct.findAll(
        {
            include: [
                {
                    model: Product,
                    as: 'products',
                },
                {
                    model: Campaign,
                    as: 'campaigns',
                },
            ],
        },
    );
    res.status(200).json(campaignProductData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const campaignProductData = await CampaignProduct.findByPk(req.params.id,
        {
            include: [
                {
                    model: Product,
                    as: 'products',
                },
                {
                    model: Campaign,
                    as: 'campaigns',
                },
            ],
        },
    );
    if (!campaignProductData) {
      res.status(404).json({ message: "No rep found with this id!" });
      return;
    }
    res.status(200).json(campaignProductData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const campaignProductData = await CampaignProduct.create({
      product_id: req.body.product_id,
      campaign_id: req.body.campaign_id,
    });
    res.status(200).json(campaignProductData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const campaignProductData = await CampaignProduct.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(campaignProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const campaignProductData = await CampaignProduct.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!campaignProductData) {
      res
        .status(404)
        .json({ message: `No rep found with id: ${req.params.id}!` });
    }

    res.status(200).json(campaignProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
