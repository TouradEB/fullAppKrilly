
const User = require("../models/User.js");
const Immobilier = require("../models/Immobilier.js");
const Transaction = require("../models/Transaction.js");
const categories = require("../models/Categorie.js");
const Favorite  = require('../models/Favorite.js');
const bcrypt = require('bcrypt');


exports.getPublication = async (req, res) => {
  try {
    const immobiliers = await Immobilier.aggregate([
      {
        $lookup: {
          from: "categories", // Replace "categories" with the actual name of your category collection
          localField: "categorie",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $project: {
          _id: 1,
          owner: 1,
          titre: 1,
          adress: 1,
          photos: 1,
          description: 1,
          perks: 1,
          supInfo: 1,
          checkIn: 1,
          checkOut: 1,
          nomberchamber: 1,
          price: 1,
          status: 1,
          categoryName: "$category.name",
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ]);

    res.status(200).json(immobiliers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


exports.getUtilisateur = async (req, res) => {
  try {
    const utilisateurs = await User.find()
    res.status(200).json(utilisateurs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// ====================================== Add User ==================================

// exports.AddUser = async (req, res) => {
//   try {
//     await User.create(req.body);
//     res.status(200).json({ message: "User add successfully" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

exports.AddUser = async (req, res) => {
  try {
    const { password } = req.body;

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object with the hashed password
    const newUser = { ...req.body, password: hashedPassword };

    // Save the user to the database
    await User.create(newUser);

    res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ====================================== Find User ==============================================

exports.FindUser = async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// exports.UpdateUser = async (req, res) => {
//   try {
//     const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
//       new: true,
//     });
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };


exports.UpdateUser = async (req, res) => {
  try {
    const { password } = req.body;

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object with the updated hashed password
    const updatedUser = { ...req.body, password: hashedPassword };

    // Find and update the user in the database
    const data = await User.findOneAndUpdate(
      { _id: req.params.id },
      updatedUser,
      { new: true }
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const data = await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// ============================================= getTransactions

exports.getTransactions = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
      };

      return sortFormatted;
    };
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    const total = await Transaction.countDocuments({
      name: { $regex: search, $options: "i" },
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//===============================================  getCategory

exports.AddCategory = async (req, res) => {
  try {
    await categories.create(req.body);
    res.status(200).json({ message: "category add successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.FindAllCategory = async (req, res) => {
  try {
    const data = await categories.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.UpdateCategory = async (req, res) => {
  try {
    const data = await categories.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.DeleteCategory = async (req, res) => {
  try {
    const data = await categories.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "category deleted with success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.FindSinlCategory = async (req, res) => {
  try {
    const data = await categories.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// ==================================== Immobillier =============================================


exports.changeToRefuser = async (req, res) => {
  try {
    const { immobilierId } = req.params;

    // Find the Immobilier document by its ID
    const immobilier = await Immobilier.findById(immobilierId);

    if (!immobilier) {
      return res.status(404).json({ message: 'Immobilier not found' });
    }

    // Change the status to "refuser"
    immobilier.status = 'refuser';

    // Save the updated Immobilier document
    await immobilier.save();

    return res.json({ message: 'Status updated successfully', immobilier });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.changeToAccepter = async (req, res) => {
  try {
    const { immobilierId } = req.params;

    // Find the Immobilier document by its ID
    const immobilier = await Immobilier.findById(immobilierId);

    if (!immobilier) {
      return res.status(404).json({ message: 'Immobilier not found' });
    }

    // Change the status to "accepter"
    immobilier.status = 'accepter';

    // Save the updated Immobilier document
    await immobilier.save();

    return res.json({ message: 'Status updated successfully', immobilier });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// exports.DeleteImmobilier = async (req, res) => {
//   try {
//     const data = await Immobilier.deleteOne({ _id: req.params.id });
//     res.status(200).json({ message: "immobilier deleted with success" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

exports.deleteImmobilier = async (req, res) => {
  try {
    const immobilierId = req.params.id;
    const immobilier = await Immobilier.findById(immobilierId);

    if (!immobilier) {
      return res.status(404).json({ message: 'Immobilier not found' });
    }

    await immobilier.remove();

    res.json({ message: 'Immobilier deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the immobilier', error });
  }
};

// exports.getTotalImmobiliers = async (req, res) => {
//   try {
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();
//     const currentYear = currentDate.getFullYear();

//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

//     const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
//     const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear;
//     const firstDayOfLastMonth = new Date(lastYear, lastMonth, 1);

//     const totalCurrentMonth = await Immobilier.countDocuments({
//       createdAt: { $gte: firstDayOfMonth },
//     });

//     const totalLastMonth = await Immobilier.countDocuments({
//       createdAt: {
//         $gte: firstDayOfLastMonth,
//         $lt: firstDayOfMonth,
//       },
//     });

//     let percentageChange = null;
//     if (totalLastMonth > 0) {
//       percentageChange = ((totalCurrentMonth - totalLastMonth) / totalLastMonth) * 100;
//     } else {
//       percentageChange = 0; // Set a default value if totalLastMonth is zero
//     }

//     res.status(200).json({
//       totalCurrentMonth,
//       percentageChange,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


exports.getTotalImmobiliers = async (req, res) => {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const firstDayOfLastMonth = new Date(lastYear, lastMonth, 1);

    const totalCurrentMonth = await Immobilier.countDocuments({
      createdAt: { $gte: firstDayOfMonth },
    });

    const totalLastMonth = await Immobilier.countDocuments({
      createdAt: {
        $gte: firstDayOfLastMonth,
        $lt: firstDayOfMonth,
      },
    });

    const totalAllTime = await Immobilier.countDocuments(); // Count all documents

    let percentageChange = null;
    if (totalLastMonth > 0) {
      percentageChange = ((totalCurrentMonth - totalLastMonth) / totalLastMonth) * 100;
    } else {
      percentageChange = 0; // Set a default value if totalLastMonth is zero
    }

    res.status(200).json({
      totalCurrentMonth,
      percentageChange,
      totalAllTime, // Include total number of documents for all time
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// exports.getTotalCategory = async (req, res) => {
//   try {
//     const totalCategory = await categories.countDocuments();
//     res.status(200).json({ totalCategory });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getTotalFavorite = async (req, res) => {
  try {
    const TotalFavorite = await Favorite.countDocuments();
    res.status(200).json({ TotalFavorite });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.getTotalCategory = async (req, res) => {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const firstDayOfLastMonth = new Date(lastYear, lastMonth, 1);

    const totalCurrentMonth = await categories.countDocuments({
      createdAt: { $gte: firstDayOfMonth },
    });

    const totalLastMonth = await categories.countDocuments({
      createdAt: {
        $gte: firstDayOfLastMonth,
        $lt: firstDayOfMonth,
      },
    });

    const totalAllTime = await categories.countDocuments(); // Count all documents

    let percentageChange = null;
    if (totalLastMonth > 0) {
      percentageChange = ((totalCurrentMonth - totalLastMonth) / totalLastMonth) * 100;
    } else {
      percentageChange = 0; // Set a default value if totalLastMonth is zero
    }

    res.status(200).json({
      totalCurrentMonth,
      percentageChange,
      totalAllTime, // Include total number of documents for all time
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// exports.getTotalUser = async (req, res) => {
//   try {
//     const totalUser = await User.countDocuments();
//     res.status(200).json({ totalUser });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getTotalUser = async (req, res) => {
//   try {
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth();
//     const currentYear = currentDate.getFullYear();

//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

//     const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
//     const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear;
//     const firstDayOfLastMonth = new Date(lastYear, lastMonth, 1);

//     const totalCurrentMonth = await User.countDocuments({
//       createdAt: { $gte: firstDayOfMonth },
//     });

//     const totalLastMonth = await User.countDocuments({
//       createdAt: {
//         $gte: firstDayOfLastMonth,
//         $lt: firstDayOfMonth,
//       },
//     });

//     let percentageChange = null;
//     if (totalLastMonth > 0) {
//       percentageChange = ((totalCurrentMonth - totalLastMonth) / totalLastMonth) * 100;
//     } else {
//       percentageChange = 0; // Set a default value if totalLastMonth is zero
//     }

//     res.status(200).json({
//       totalCurrentMonth,
//       percentageChange,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getTotalUser = async (req, res) => {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const firstDayOfLastMonth = new Date(lastYear, lastMonth, 1);

    const totalCurrentMonth = await User.countDocuments({
      createdAt: { $gte: firstDayOfMonth },
    });

    const totalLastMonth = await User.countDocuments({
      createdAt: {
        $gte: firstDayOfLastMonth,
        $lt: firstDayOfMonth,
      },
    });

    const totalAllTime = await User.countDocuments(); // Count all documents

    let percentageChange = null;
    if (totalLastMonth > 0) {
      percentageChange = ((totalCurrentMonth - totalLastMonth) / totalLastMonth) * 100;
    } else {
      percentageChange = 0; // Set a default value if totalLastMonth is zero
    }

    res.status(200).json({
      totalCurrentMonth,
      percentageChange,
      totalAllTime, // Include total number of documents for all time
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.findImmobilierCountByCategory = async (req, res) => {
  try {
    const immobilierCounts = await Immobilier.aggregate([
      {
        $group: {
          _id: '$categorie',
          count: { $sum: 1 },
        },
      },
    ]);

    res.json(immobilierCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


exports.getImmobilierByPlace = async (req, res) => {
  const place = req.params.place;

  try {
    const favorite = await Favorite.findOne({ place }); // Find the Favorite by place
    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    const immobilier = await Immobilier.findById(favorite.place); // Find the corresponding Immobilier
    if (!immobilier) {
      return res.status(404).json({ message: 'Immobilier not found' });
    }

    return res.json(immobilier); // Return the Immobilier data
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateRentedStatus = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters

    // Find the Immobilier object by ID and update the rented property
    const immobilier = await Immobilier.findByIdAndUpdate(
      id,
      { rented: true },
      { new: true }
    );

    // Check if the Immobilier object exists
    if (!immobilier) {
      return res.status(404).json({ message: "Immobilier notttttt " });
    }

    // Send the updated Immobilier object as the response
    res.status(200).json({ message: "Rent status updated", immobilier });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ============================ phone Number 

exports.getUserPhoneNumber = async (req, res) => {
  try {
    const id = req.params.id;
    // res.json(id) ;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const data= user.phoneNumber;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching user data.' });
  }
};









