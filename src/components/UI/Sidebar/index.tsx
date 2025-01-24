"use client";

import { useUser } from "@/context/user.provider";
import { getUserFormAxiois } from "@/services/user";
import { useEffect, useState } from "react";
import { SidebarOptions } from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";

interface PurchasedContent {
  _id: string;
  isPremium: boolean;
}

interface UserData {
  purchasedContent: PurchasedContent[];
  email: string;
  img: string;
  name: string;
  role: string;
}

const Sidebar = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);

  // Fetch user data from the database
  useEffect(() => {
    const fetchUserData = async () => {
      if (user?._id && !userData) {
        // Check if userData is already set to avoid unnecessary fetches
        try {
          const response = await getUserFormAxiois(user?._id);
          setUserData(response?.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user?._id, userData]); // Keep only essential dependencies

  return (
    <div>
      <div className="mt-3 space-y-2 rounded-xl p-2">
        <SidebarOptions
          links={userData?.role === "user" ? userLinks : adminLinks}
        />
      </div>
    </div>
  );
};

export default Sidebar;
