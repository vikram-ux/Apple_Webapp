"use client"
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <>
      {/* footer section */}
      <div className="footer w-full h-auto bg-gray-100 p-8 ">
        <p className="text-sm text-gray-500">
          ◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply. <br />
          Representative example: <br />
          A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00. <br />
          ‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback. <br />
          1. Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages. <br />
          A subscription is required for Apple TV+. <br />
          Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
        </p>
        <hr className="border-t border-gray-300 my-4" />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Shop and Learn</AccordionTrigger>
            <AccordionContent>
              Store
            </AccordionContent>
            <AccordionContent>
              Mac
            </AccordionContent>
            <AccordionContent>
              iPad
            </AccordionContent>
            <AccordionContent>
              iPhone
            </AccordionContent>
            <AccordionContent>
              Watch
            </AccordionContent>
            <AccordionContent>
              AirPods
            </AccordionContent>
            <AccordionContent>
              TV & Home
            </AccordionContent>
            <AccordionContent>
              Air Tag
            </AccordionContent>
            <AccordionContent>
              Accessories
            </AccordionContent>
            <AccordionContent>
              Gift Cards
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Apple Wallet</AccordionTrigger>
            <AccordionContent>
              Wallet
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Account</AccordionTrigger>
            <AccordionContent>
              Manage Your Apple Account
            </AccordionContent>
            <AccordionContent>
              Apple Store Account
            </AccordionContent>
            <AccordionContent>
              iCloud.comt
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Entertainment</AccordionTrigger>
            <AccordionContent>
              Apple One
            </AccordionContent>
            <AccordionContent>
              Apple TV+
            </AccordionContent>
            <AccordionContent>
              Apple Music
            </AccordionContent>
            <AccordionContent>
              Apple Arcade
            </AccordionContent>
            <AccordionContent>
              Apple Podcasts
            </AccordionContent>
            <AccordionContent>
              Apple Books
            </AccordionContent>
            <AccordionContent>
              App Store
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Apple Store</AccordionTrigger>
            <AccordionContent>
              Find a Store
            </AccordionContent>
            <AccordionContent>
              Genius Bar
            </AccordionContent>
            <AccordionContent>
              Today at Apple
            </AccordionContent>
            <AccordionContent>
              Group Reservations
            </AccordionContent>
            <AccordionContent>
              Apple Camp
            </AccordionContent>
            <AccordionContent>
              Apple Trade In
            </AccordionContent>
            <AccordionContent>
              Ways to Buy
            </AccordionContent>
            <AccordionContent>
              Recycling Programme
            </AccordionContent>
            <AccordionContent>
              Order Status
            </AccordionContent>
            <AccordionContent>
              Shopping Help
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>For Buisness</AccordionTrigger>
            <AccordionContent>
              Apple and Business
            </AccordionContent>
            <AccordionContent>
              Shop for Business
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>For Education</AccordionTrigger>
            <AccordionContent>
              Apple and Education
            </AccordionContent>
            <AccordionContent>
              Shop for Education
            </AccordionContent>
            <AccordionContent>
              YShop for University
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>For Healthcare</AccordionTrigger>
            <AccordionContent>
              Apple in Healthcare
            </AccordionContent>
            <AccordionContent>
              Mac in Healthcare
            </AccordionContent>
            <AccordionContent>
              Health on Apple Watch
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Apple Values</AccordionTrigger>
            <AccordionContent>
              Accessibility
            </AccordionContent>
            <AccordionContent>
              Education
            </AccordionContent>
            <AccordionContent>
              Environment
            </AccordionContent>
            <AccordionContent>
              Privacy
            </AccordionContent>
            <AccordionContent>
              Supply Chain
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>About Apple</AccordionTrigger>
            <AccordionContent>
              Newsroom
            </AccordionContent>
            <AccordionContent>
              Apple Leadership
            </AccordionContent>
            <AccordionContent>
              Job Opportunities
            </AccordionContent>
            <AccordionContent>
              Investors
            </AccordionContent>
            <AccordionContent>
              Ethics & Compliance
            </AccordionContent>
            <AccordionContent>
              Events
            </AccordionContent>
            <AccordionContent>
              Contact Apple
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="text-sm text-gray-500 mt-10">
          More ways to shop: <Link className="text-blue-500" href="/store">Find an Apple Store</Link> or <Link className="text-blue-500" href="/store">other retailer</Link> near you. Or call <Link className="text-blue-500" href="/store">000800 040 1966</Link>.
        </p>

        <hr className="border-t border-gray-300 my-4" />

        <div className="flex justify-between">
          <p className="text-sm text-gray-500 mt-4">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 mt-4 cursor-pointer">
            Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
          </p>

          <p className="text-sm text-gray-500 mt-4 cursor-pointer">
            India
          </p>
        </div>

      </div>

    </>
  );
}
