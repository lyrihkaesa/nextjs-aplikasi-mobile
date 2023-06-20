export const metadata = {
    title: 'Medicines'
}

const MedicineLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="py-10 px-10">{children}</div>
    )
}

export default MedicineLayout