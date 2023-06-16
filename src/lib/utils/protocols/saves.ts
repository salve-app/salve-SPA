export interface SaveCategories {
  categories: Array<SaveCategory>
}

export interface SaveCategory {
  id: number
  name: string
  cost: number
}
