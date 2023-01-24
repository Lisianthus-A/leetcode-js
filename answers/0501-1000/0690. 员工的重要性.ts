function GetImportance(employees: Employee[], id: number): number {
    const o = {};
    for (const e of employees) {
        const { id, importance, subordinates } = e;
        o[id] = { importance, subordinates };
    }

    let res = 0;
    const helper = (id: number) => {
        res += o[id].importance;

        for (const s of o[id].subordinates) {
            helper(s);
        }
    }
    helper(id);

    return res;

};