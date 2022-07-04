import React, { useEffect, useMemo, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { layoutState } from '@src/atom/layoutAtom'
import { PageLayout } from '@src/components/layout'
import { NextPage } from 'next'
import { HorizontalItemList, SearchBar } from '@src/components/common'
import { useInput } from '@src/hooks'

export async function getServerSideProps(ctx) {
  return { props: { title: 'What would you drink?' } }
}

const MenuPage: NextPage<{
  title: string
}> = ({ title }) => {
  const MenuList = useMemo(() => ['coffee', 'chocolate', 'others'], [])

  const [searchInput, handleSearchInput] = useInput('')
  const setUserLayoutState = useSetRecoilState(layoutState)
  const [selectedMenu, setSelectedMenu] = useState<typeof MenuList[number]>('coffee')

  useEffect(() => {
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
