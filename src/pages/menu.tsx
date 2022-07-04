import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { layoutState } from '@src/atom/layoutAtom'
import { PageLayout } from '@src/components/layout'
import { NextPage } from 'next'
import { HorizontalItemList, SearchBar } from '@src/components/common'
import { useInput } from '@src/hooks'
import { sheetState } from '@src/atom/sheetAtom'

export async function getServerSideProps(ctx) {
  return { props: { title: 'What would you drink?' } }
}

const MenuPage: NextPage<{
  title: string
}> = ({ title }) => {
  const MenuList = useMemo(() => ['coffee', 'chocolate', 'others'], [])
  const setUserLayoutState = useSetRecoilState(layoutState)
  const [appSheet, setAppSheet] = useRecoilState(sheetState)

  const [searchInput, handleSearchInput] = useInput('')
  const [selectedMenu, setSelectedMenu] = useState<typeof MenuList[number]>('coffee')

  useEffect(() => {
    setAppSheet((prev) => ({ ...prev, isOpen: true, activeOverlay: false }))
    setUserLayoutState((prev) => ({ ...prev, title: title }))
  }, [])

  return (
    <PageLayout fullWidth enableYPadding fixedHeight>
      <div className="flex flex-col space-y-4 px-4">
        <SearchBar placeholder="Search.." value={searchInput} onChange={handleSearchInput} />
        <HorizontalItemList
          items={MenuList}
          selectedItem={selectedMenu}
          onItemClick={(item) => setSelectedMenu(item)}
        />
      </div>
    </PageLayout>
  )
}

export default MenuPage
