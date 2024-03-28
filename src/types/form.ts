export interface InitialData {
  id: number
  title: string
  modalText: string
  symbolNumber: string | null
  symbolModal: string | null
  maxLength: number
  value: number
}

export interface InitialValues {
  MonthlyMembers: number
  CostPerMonth: number
  AnnualMembers: number
  CostPerYear: number
  MonthlyRetentionRate: number
}