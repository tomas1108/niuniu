import { ChipPokerType, Slot } from "~/constants/chip";

export const formatCurrency = (value: number | undefined | null, prefix = "$") =>
  `${prefix} ${`${Math.ceil(value || 0)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const moneyChip = (chip: ChipPokerType) => {
  switch (chip) {
    case "chip10K":
      return 10000;
    case "chip30K":
      return 30000;
    case "chip50K":
      return 50000;
    case "chip100K":
      return 100000;
    case "chip500K":
      return 500000;
    case "chip1M":
      return 1000000;
    default:
      return 0;
  }
};

const chipTypeSlot = (
  slot: Slot,
  data: {
    super: string;
    double: string;
    event: string;
  },
) => {
  switch (slot) {
    case "super":
      return data.super;
    case "double":
      return data.double;
    default:
      return data.event;
  }
};

export const chipPointsOfSlot = (slot: Slot, chip: ChipPokerType) => {
  switch (chip) {
    case "chip10K":
      return chipTypeSlot(slot, {
        super: "chip130K",
        double: "chip60K",
        event: "chip10K",
      });
    case "chip30K":
      return chipTypeSlot(slot, {
        super: "chip390K",
        double: "chip180K",
        event: "chip30K",
      });
    case "chip50K":
      return chipTypeSlot(slot, {
        super: "chip650K",
        double: "chip300K",
        event: "chip50K",
      });
    case "chip100K":
      return chipTypeSlot(slot, {
        super: "chip1M3",
        double: "chip600K",
        event: "chip100K",
      });
    case "chip500K":
      return chipTypeSlot(slot, {
        super: "chip6M5",
        double: "chip3M",
        event: "chip500K",
      });
    case "chip1M":
      return chipTypeSlot(slot, {
        super: "chip13M",
        double: "chip6M",
        event: "chip1M",
      });
  }
};
