export interface ChargebackMetric {
    title: string;
    value: string;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
}

export interface ChargebackListItem {
    id: string;
    merchantName: string;
    amount: number;
    date: string;
    status: "Pendente" | "Respondido" | "Perdido" | "Ganho";
    actionRequired: boolean;
    score?: number;
}

export const mockMetrics: ChargebackMetric[] = [
    {
        title: "Win rate",
        value: "85%",
        trend: "up",
        trendValue: "+2.4%"
    },
    {
        title: "Valor recuperado",
        value: "R$ 1.2M",
        trend: "up",
        trendValue: "+15%"
    },
    {
        title: "Custo por Disputa",
        value: "R$ 45",
        trend: "down",
        trendValue: "-5%"
    },
    {
        title: "Tempo de resolução",
        value: "3.5 dias",
        trend: "down",
        trendValue: "-1.2 dias"
    },
    {
        title: "Redução de chargebacks",
        value: "20%",
        trend: "up",
        trendValue: "+5%"
    }
];

export const mockChargebacks: ChargebackListItem[] = [
    {
        id: "CBK-10928",
        merchantName: "Loja Exemplo A",
        amount: 1540.50,
        date: "2026-02-21",
        status: "Pendente",
        actionRequired: true,
        score: 85
    },
    {
        id: "CBK-10927",
        merchantName: "Loja Exemplo B",
        amount: 320.00,
        date: "2026-02-20",
        status: "Respondido",
        actionRequired: false
    },
    {
        id: "CBK-10926",
        merchantName: "Loja Exemplo C",
        amount: 4500.00,
        date: "2026-02-18",
        status: "Ganho",
        actionRequired: false
    },
    {
        id: "CBK-10925",
        merchantName: "Loja Exemplo D",
        amount: 125.90,
        date: "2026-02-15",
        status: "Perdido",
        actionRequired: false
    },
    {
        id: "CBK-10924",
        merchantName: "Loja Exemplo E",
        amount: 890.00,
        date: "2026-02-10",
        status: "Pendente",
        actionRequired: true,
        score: 42
    }
];
