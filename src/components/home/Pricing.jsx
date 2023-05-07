import { CheckIcon } from '@heroicons/react/20/solid'
import { formatStudioPrice } from "@/core/utils/prices";
import { Button } from "@/components/Button";
import {
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { HiBadgeCheck } from "react-icons/hi";
export const CheckedListItem = ({ children }) => (
  <ListItem>
    <ListIcon fontSize="xl" as={HiBadgeCheck} /> {children}
  </ListItem>
);

const includedFeatures = [
  '<b>1</b> Studio with a <b>custom trained model</b>',
  `<b>${process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT}</b> avatars 4K
  generation`,
  '<b>30</b> AI prompt assists',
  'Craft your own prompt',
]

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Upgrade your digital self: AIvatar’s affordable pricing lets you create multiple avatars with ease.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">$10 AI Avatars with AIvatar Studio</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Create your personalized AI avatar with AIvatar’s studio for just $10
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-purple-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-purple-600" aria-hidden="true" />
                  <p dangerouslySetInnerHTML={{ __html: feature }}></p>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{formatStudioPrice()}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">/ studio</span>
                </p>
                <div>
                  <Button
                    className="mt-6"
                    href="/dashboard"
                    aria-label={`Start Creating AI Avatars`}
                  >
                    Start Creating AI Avatars
                  </Button>
                </div>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  1 Studio + {process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT} shots
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}