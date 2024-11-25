"use client"

import { PriceList } from "@/config/site"
import BookingButton from "@/components/ui/booking-button"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// const services = [
//   {
//     name: "Wash",
//     duration: "30MIN",
//     price: "R240,00",
//   },
//   {
//     name: "Gents cut blade & fade",
//     duration: "30MIN",
//     price: "R290,00",
//   },
//   {
//     name: "Clipper cut",
//     duration: "30mins",
//     price: "R 210,00",
//   },
//   {
//     name: "Hot towel head shave",
//     duration: "30mins",
//     price: "R 280,00",
//   },
//   {
//     name: "Gents style",
//     duration: "30MIN",
//     price: "R 120,00",
//   },
//   {
//     name: "Pattern design",
//     duration: "30MIN",
//     price: "R240,00",
//   },
// ]

export default function PricingTable() {
  return (
    <div className="mx-auto w-full max-w-4xl bg-gray-50 px-4">
      {/* <h2 className="mb-8 text-center text-2xl font-medium text-muted-foreground">
        We offer advanced barbering for all your gents needs
      </h2> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px] text-center uppercase">
              Cutting & Styling
            </TableHead>
            <TableHead className="text-center uppercase">Duration</TableHead>
            <TableHead className="text-center uppercase">Price</TableHead>
            <TableHead className="text-center uppercase">
              Request a Booking
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PriceList.map((service) => (
            <TableRow key={service.name}>
              {service.price != "" && (
                <TableCell className="text-center font-medium">
                  {service.name}
                </TableCell>
              )}
              {service.price === "" && (
                <TableCell className="bg-popover py-5 text-center ">
                  <p className="text-lg font-semibold">{service.name}</p>
                </TableCell>
              )}
              <TableCell className="text-center">{service.duration}</TableCell>
              <TableCell className="text-center">{service.price}</TableCell>
              <TableCell className="text-center">
                {service.price != "" && (
                  <BookingButton>
                    <Button
                      variant="ghost"
                      className="text-[#B0976D] hover:bg-[#B0976D]/10 hover:text-[#B0976D]"
                    >
                      REQUEST A BOOKING
                    </Button>
                  </BookingButton>
                )}
              </TableCell>
            </TableRow>
          ))}
          <TableHead className="flex w-full items-center justify-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Hair Care
            </h4>
          </TableHead>
        </TableBody>
      </Table>
    </div>
  )
}
