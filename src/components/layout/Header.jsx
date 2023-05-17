import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import {
  Flex,
  HStack,
  IconButton,
  Text,
  Spinner,
  Tooltip,
} from '@chakra-ui/react'
import { HiLogout } from 'react-icons/hi'
import { Button } from '@/components/Button'

const Header = () => {
  const { data: session, status } = useSession()

  return (
    <div className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
      <Flex justifyContent="space-between" py={4} as="footer">
        <Flex
          role="group"
          as={Link}
          href="/"
          alignItems="center"
          fontWeight="bold"
          fontSize="2xl"
        >
          <svg
            className="h-10 w-10 text-current"
            width="240px"
            height="379px"
            viewBox="0 0 240 379"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Group">
                <path
                  d="M145.710937,77.9140625 C61.8072917,131.908854 19.8554687,189.355469 19.8554687,250.253906 C19.8554687,311.152344 86.7369792,347.25651 220.5,358.566406"
                  id="Path"
                  className="stroke-current"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M79.193938,128.576583 C37.0854793,72.796361 25.7057292,36.4973958 45.0546875,19.6796875 C64.4036458,2.86197917 97.9557292,22.2734375 145.710938,77.9140625"
                  id="Path-3"
                  className="stroke-current"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M188.394531,53.3671875 C129.550781,27.0054341 86.75,13.8245574 59.9921875,13.8245574"
                  id="Path-4"
                  className="stroke-current"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M188.394531,53.3671875 C129.550781,27.0054341 86.75,13.8245574 59.9921875,13.8245574"
                  id="Path-4"
                  className="stroke-current"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M188.394531,53.3671875 C194.545241,49.571047 199.182517,47.3451355 202.306357,46.6894531 C211.841887,44.6879811 220.208984,44.9924599 220.208984,44.9924599"
                  id="Path-5"
                  className="stroke-current"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M45.8350848,306.689359 C73.4995193,209.54374 119.670174,160.97093 184.34705,160.97093 L184.34705,202.501574 C138.796763,259.218481 129.312785,308.177486 155.895117,349.37859"
                  id="Path-6"
                  className="stroke-current"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M163.053424,319.535786 C175.889643,324.478251 185.594254,326.159003 192.167255,324.578044 C198.740256,322.997085 208.087499,316.733921 220.208984,305.788551 C206.886286,302.808246 197.539043,298.779589 192.167255,293.702579 C186.149155,288.014724 183.54242,279.080812 184.34705,266.900843 L220.208984,266.900843"
                  id="Path-7"
                  className="stroke-current"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle
                  id="Oval"
                  className="stroke-current"
                  strokeWidth="14"
                  cx="150.5"
                  cy="200.5"
                  r="7"
                ></circle>
                <rect
                  id="Rectangle"
                  x="0"
                  y="0"
                  width="240"
                  height="379"
                ></rect>
              </g>
            </g>
          </svg>
          <Text display={{ base: 'none', sm: 'inherit' }}>AIvatar</Text>
        </Flex>
        <div className="space-x-4 flex items-center justify-end">
          <Button size="sm" variant="outline" href="/prompts">
            <span className="hidden sm:inline">Prompts</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="inline h-[1.25em] w-[1.25em] sm:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </Button>
          {session ? (
            <>
              <Tooltip hasArrow label="Public gallery">
                <Button size="sm" href={`/gallery/${session.userId}`}>
                  <span className="hidden sm:inline">My Gallery</span>
                  <svg
                    className="inline h-[1.25em] w-[1.25em] sm:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </Button>
              </Tooltip>
              <Button size="sm" href="/dashboard">
                <span className="hidden sm:inline">Dashboard</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="inline h-[1.25em] w-[1.25em] sm:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                  />
                </svg>
              </Button>
              <Tooltip hasArrow label="Logout">
                <Button
                  size="sm"
                  variant="outline"
                  color="gray"
                  onClick={() => {
                    signOut({ callbackUrl: '/' })
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="inline h-[1.25em] w-[1.25em]"
                    >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </Button>
              </Tooltip>
            </>
          ) : (
            <>
              {status === 'loading' && <Spinner size={'sm'} />}
              {status !== 'loading' && (
                <Button size="sm" href="/login">
                  Login
                </Button>
              )}
            </>
          )}
        </div>
      </Flex>
    </div>
  )
}

export default Header
