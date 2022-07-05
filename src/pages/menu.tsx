import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { layoutState } from '@src/atom/layoutAtom'
import { PageLayout } from '@src/components/layout'
import { NextPage } from 'next'
import { HorizontalItemList, SearchBar } from '@src/components/common'
import { useInput } from '@src/hooks'
import { sheetInitialState, sheetState } from '@src/atom/sheetAtom'
import SheetMenuList from '@src/components/pages/MenuPage/SheetMenuList'

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
  const [[page, pageDir], setPage] = useState([0, 0])

  useEffect(() => {
    setAppSheet((prev) => ({
      ...prev,
      isOpen: true,
      activeOverlay: false,
    }))
    setUserLayoutState((prev) => ({ ...prev, title: title }))

    return () => {
      setAppSheet({ ...sheetInitialState })
    }
  }, [])

  useEffect(() => {
    setAppSheet((prev) => ({
      ...prev,
      children: (
        <SheetMenuList
          selectedPage={page}
          direction={pageDir}
          onPageChange={(idx, pageDir) => setPage([idx, pageDir])}
        />
      ),
    }))
  }, [page])

  return (
    <PageLayout fullWidth enableYPadding fixedHeight>
      <div className="flex flex-col space-y-4 px-4">
        <SearchBar placeholder="Search.." value={searchInput} onChange={handleSearchInput} />
        <HorizontalItemList
          items={MenuList}
          selectedIdx={page}
          onItemClick={(idx) => setPage((prev) => [idx, idx - prev[0] >= 0 ? 1 : -1])}
        />
      </div>
    </PageLayout>
  )
}

export default MenuPage
